import React from "react";
import ScrollAnimation from "../common/ScrollAnimation";

interface ProductInfoProps {
  clientName?: string;
  tagline?: string;
  services?: string[];
  productTitle?: string;
  productDescription1?: string;
  productImage?: string;
  productImageAlt?: string;
  productDescription2?: string;
}

const ProductInfoAi: React.FC<ProductInfoProps> = ({
  clientName = "Client Name",
  tagline = "Project Tagline",
  services = [],
  productTitle = "Product Title",
  productDescription1 = "First description paragraph.",
  productImage = "/placeholder.png",
  productImageAlt = "Product image",
  productDescription2 = "Second description paragraph.",
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-24 px-5 md:px-20">
      <div className="flex flex-col space-y-16 col-span-2">
        <ScrollAnimation direction={"up"}>
          <div className="flex flex-col space-y-6">
            <p className="font-NeueMedium text-2xl uppercase">{clientName}</p>
            <p className="text-3xl md:text-5xl font-NeueMedium">{tagline}</p>
          </div>
        </ScrollAnimation>

        <div className="flex flex-col space-y-6">
          <ScrollAnimation direction={"up"}>
            <div className="flex flex-col space-y-6">
              <h1 className="font-NeueRoman text-2xl">SERVICES</h1>
              <div className="flex flex-col space-y-1">
                {services.map((service, index) => (
                  <p key={index} className="font-NeueMedium text-2xl">
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="col-span-3 flex flex-col space-y-16">
        <ScrollAnimation direction={"up"}>
          <p className="font-NeueRoman text-2xl">PRODUCT INFO</p>
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <p className="font-NeueBold text-3xl md:text-5xl">
                {productTitle}
              </p>
              <p className="font-NeueRoman text-lg">{productDescription1}</p>
            </div>
            <img
              src={productImage}
              alt={productImageAlt}
              className="w-full h-[359px] object-cover"
            />
            <p className="font-NeueRoman text-lg">{productDescription2}</p>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default ProductInfoAi;
