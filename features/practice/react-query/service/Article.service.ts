import { convertObjectToObjectString } from "@/lib/utils";
const API_KEY = "live_G7Nr2BNWvzxptIeYSlE4P32C2Uk5d1bypjcsl0Wh8zda8zXUcSNoJrvLeBPYLJQR"
export class ArticleService {

  static async getArticles({ page, limit = 40 }: {page: number, limit?: number }) {
    const stringParams = convertObjectToObjectString({ page, limit, order: "ASC" })

    const queryString = new URLSearchParams(stringParams).toString();
    const res = await fetch(`https://api.thecatapi.com/v1/images/search?${queryString}`, {
      headers: {
        "x-api-key": API_KEY
      }
    })
    const json = await res.json()
    return json;
  }

  static async getArticle(id: string | number) {
    const res = await fetch(`https://api.thecatapi.com/v1/images/${id}`)
    const json = await res.json()

    return json;
  }
}