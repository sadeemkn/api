export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { filename, size } = req.body;

  return res.status(200).json({
    status: "Success",
    message: "Image processed using a serverless function",
    file: {
      name: filename,
      size_kb: size,
    },
    serverless_features: {
      auto_scaling: true,
      pay_per_use: true,
      cold_start_possible: true,
      no_server_management: true,
    }
  });
}

