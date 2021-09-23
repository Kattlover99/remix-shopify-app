import { fetcher } from "@mcansh/fetcher";

type GraphQLResponse<T> =
  | {
      data: T;
      errors?: never;
    }
  | {
      data?: never;
      errors: Array<{ message: string }>;
    };

async function storefront<T>(
  query: string,
  variables = {}
): Promise<{ data: T }> {
  const response = await fetcher<GraphQLResponse<T>>(process.env.API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": process.env.ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (response.errors) {
    throw new Error(response.errors.map((e) => e.message).join("\n"));
  }

  return response;
}

export { storefront };