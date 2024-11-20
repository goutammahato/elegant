import delivery from "../assets/delivery.png"
import money from "../assets/money.png"
import lock from "../assets/lock.png"
import call from "../assets/call.png"

const Benefits = () => {
    const features = [
      { icon: delivery, title: 'Free Shipping', description: 'Order above $200' },
      { icon: money, title: 'Money-back', description: '30 days guarantee' },
      { icon: lock, title: 'Secure Payments', description: 'Secured by Stripe' },
      { icon: call, title: '24/7 Support', description: 'Phone and Email support' },
    ];
  
    return (
      <div className=" mx-auto max-w-6xl px-8 grid grid-cols-1 sm:grid-cols-2 mt-5 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-[#F3F5F7] p-6 rounded-lg shadow-sm ">
          <div className="mb-4 text-3xl">
            <img src={feature.icon} alt="image" className="h-10"/>
          </div>
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </div>
        ))}
      </div>
    );
  };
export default Benefits