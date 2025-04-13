
export type PropsDetailedData = {
  id: string,
  title: string,
  image2: string,
  price: number,
  description1: string,
  description2: string,
    heading: string;
    author: string;
    date:string
  };
  
  export const detailedData: PropsDetailedData[] = [
    {
      id: "1",
      title: "Organic Almond Flour",
      heading: "Premium Organic Almond Flour - Gluten Free",
      image2: "/almond.jpg", // Put this image in your public/images folder
      price: 499,
      description1: "Made from 100% finely ground almonds, this almond flour is perfect for healthy baking.",
      description2:
        "Our almond flour is gluten-free, keto-friendly, and rich in protein. Ideal for pancakes, cookies, and bread. It offers a light texture and a subtle nutty flavor, making your recipes healthier and delicious.",
      author: "EnerGrain",
      date: "April 2025",
    },
    {
      id: "2",
      title: "Coconut Flour",
      heading: "All-Natural Coconut Flour - Gluten Free & Keto Friendly",
      image2: "/images/coconut-flour.jpg",
      price: 399,
      description1: "A high-fiber, low-carb flour alternative made from dried coconut meat.",
      description2:
        "Coconut flour is naturally gluten-free, perfect for baking and thickening sauces. It is packed with fiber and imparts a sweet, nutty flavor. Use it in muffins, pancakes, and healthy treats.",
      author: "EnerGrain",
      date: "April 2025",
    },
    {
      id: "3",
      title: "Quinoa Flour",
      heading: "Nutritious Quinoa Flour - Perfect for Baking",
      image2: "/images/quinoa-flour.jpg",
      price: 450,
      description1: "A protein-rich flour with a slightly nutty taste, perfect for flatbreads and baking.",
      description2:
        "Quinoa flour is a powerhouse of nutrition. It contains all nine essential amino acids and is an excellent source of plant-based protein. Great for cookies, muffins, and tortillas.",
      author: "EnerGrain",
      date: "April 2025",
    },
    {
      id: "4",
      title: "Chickpea Flour",
      heading: "Stone Ground Chickpea Flour - Naturally Gluten Free",
      image2: "/chipkea.jpg",
      price: 299,
      description1: "Also known as besan, this flour is made from roasted chickpeas and is rich in protein.",
      description2:
        "Used in Indian, Middle Eastern, and Mediterranean cuisine, chickpea flour is versatile and healthy. It adds an earthy flavor to dishes like pakoras, pancakes, and gluten-free bread.",
      author: "EnerGrain",
      date: "April 2025",
    },
  
    ];
  