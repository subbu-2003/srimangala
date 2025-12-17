"use client";
import Image from "next/image";

const QuickPicks = () => {
  const items = [
    {
      title: "Packaging Labels",
      img: "/images/packaging/labels.png",
      points: [
        "Circle, Rectangle, Square, Custom Shape & More!",
        "20+ Sizes to Fit Any Need",
        "White & Clear (Waterproof), Kraft & Paper Materials",
      ],
    },
    {
      title: "Stickers",
      img: "/images/packaging/stickers.png",
      points: [
        "Circle, Square, Oval, Custom Shape & More!",
        "Die-cut, Foil and Vinyl Options",
        "Multicolor printing that grabs attention",
      ],
    },
    {
      title: "Packaging Boxes",
      img: "/images/packaging/boxes.png",
      points: [
        "From 5 pieces",
        "Variety of styles and Custom options",
        "Single color print, Multi color, or Add-ons – Brand it your way",
      ],
    },
    {
      title: "Packaging Labels",
      img: "/images/packaging/labels.png",
      points: [
        "Circle, Rectangle, Square, Custom Shape & More!",
        "20+ Sizes to Fit Any Need",
        "White & Clear (Waterproof), Kraft & Paper Materials",
      ],
    },
    {
      title: "Stickers",
      img: "/images/packaging/stickers.png",
      points: [
        "Circle, Square, Oval, Custom Shape & More!",
        "Die-cut, Foil and Vinyl Options",
        "Multicolor printing that grabs attention",
      ],
    },
    {
      title: "Packaging Boxes",
      img: "/images/packaging/boxes.png",
      points: [
        "From 5 pieces",
        "Variety of styles and Custom options",
        "Single color print, Multi color, or Add-ons – Brand it your way",
      ],
    }
  ];

  return (
    <section className="bg-white py-16">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-center mb-14 text-gray-800">
        Packaging <span className="font-bold">Products</span>
      </h2>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-cyan-100 rounded-xl p-6 text-center"
          >
            {/* Image */}
            <div className="flex justify-center mb-6">
              <Image
                src={item.img}
                alt={item.title}
                width={360}
                height={260}
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              {item.title}
            </h3>

            {/* Bullet Points */}
            <ul className="text-gray-600 text-sm space-y-2 text-left list-disc list-inside">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickPicks;
