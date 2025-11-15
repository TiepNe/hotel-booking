import stripe from "stripe";
import Booking from "../models/Booking";

//API để xử lý các Webhook của Stripe

export const stripeWebhooks = async (request, response)=>{
    //Khởi tạo cổng thanh toán Stripe
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY);
    const sig = request.headers['stripe-signature'];
    let event;

    try {
        event = stripeInstance.webhooks.constructEvent(request.body, sig, process.
        env.STRIPE_WEBHOOK_SECRET)
    } catch (err) {
        response.status(400).send(`Lỗi Webhook: ${err.message}`)
    }

    //Xử lý sự kiện từ Stripe
    if(event.type === "payment_intent.succeeded"){
        const paymentIntent = event.data.object;
        const paymentIntentId = paymentIntent.id;

        //Lấy Thông Tin Session
        const session = await stripeInstance.checkout.sessions.list({
            payment_intent: paymentIntentId,
        });

        const { bookingId } = session.data[0].metadata;
        // Đánh dấu giao dịch đã thanh toán
        await Booking.findByIdAndUpdate(bookingId, {isPaid: true, paymentMethod: 
        "Stripe"})
    }else{
        console.log("Loại sự kiện chưa xử lý:", event.type)
    }
    response.json({ received: true });
}