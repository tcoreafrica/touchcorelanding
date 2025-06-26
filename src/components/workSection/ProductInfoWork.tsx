export default function ProductInfoWork() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-24 px-5 md:px-20">
     <div className="flex flex-col space-y-16 col-span-2">
        <div className="flex flex-col space-y-6">
          <p className="font-NeueMedium text-2xl ">INTRAVERSE AFRICA</p>
          <p className="text-3xl md:text-5xl font-NeueMedium">
            We built a next-gen booking engine for travel agents
          </p>
        </div>

        <div className="flex flex-col space-y-6 ">
          <div className="flex flex-col space-y-6">
            <h1 className="font-NeueRoman text-2xl">SERVICES</h1>
            <div className="flex flex-col space-y-1">
              <p className="font-NeueMedium text-2xl">STRATEGY</p>
              <p className="font-NeueMedium text-2xl">SYSTEM ARCHITECTURE</p>
              <p className="font-NeueMedium text-2xl">USER TESTING</p>
              <p className="font-NeueMedium text-2xl">UX DESIGN</p>
              <p className="font-NeueMedium text-2xl">UI DESIGN</p>
              <p className="font-NeueMedium text-2xl">WEB DEVELOPMENT</p>
              <p className="font-NeueMedium text-2xl">MOBILE DEVELOPMENT</p>
              <p className="font-NeueMedium text-2xl">QUALITY ASSURANCE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3 flex flex-col space-y-16">
        <p className="font-NeueRoman text-2xl"> PRODUCT INFO</p>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <p className="font-NeueBold text-3xl md:text-5xl">
              Travel Booking Website
            </p>
            <p className="font-NeueRoman text-lg">
             The company offers a comprehensive range of travel services, including affordable flight bookings, hotel reservations, visa assistance, and curated tour packages. Their mission is to provide seamless and cost-effective travel solutions to individuals and businesses, ensuring a hassle-free experience from booking to arrival. iCarryGo aims to be a one-stop platform for all travel needs, catering to both local and international travelers.
            </p>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="font-NeueBold text-3xl md:text-5xl">
              Where Touchcore comes in?
            </p>
            <p className="font-NeueRoman text-lg">
             We partnered with iCarryGo to transform their digital travel platform into a modern, scalable, and user-friendly experience. Our collaboration focused on enhancing their online presence to better serve travelers across Nigeria and beyond.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
