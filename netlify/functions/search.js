export async function handler(event) {
  const query = event.queryStringParameters.q?.toLowerCase() || "";

  const businesses = [
    { name: "Cippie Hauls", category: "Junk Removal", city: "Newnan" },
    { name: "Sweet Treats Bakery", category: "Bakery", city: "Sharpsburg" },
    { name: "Hilltop Lawn Care", category: "Landscaping", city: "Newnan" }
  ];

  const results = businesses.filter(biz =>
    biz.name.toLowerCase().includes(query) ||
    biz.category.toLowerCase().includes(query) ||
    biz.city.toLowerCase().includes(query)
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ results })
  };
}
