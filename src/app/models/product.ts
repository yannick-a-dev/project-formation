export interface Product {
    _id: string,
    name: string,
    description: string,
    vendor_info: string,
    additional_info: string,
    reviews: string,
    category: string[],
    imageUrl: string[],
    sold_price: number,
    regular_price: number,
    created_at: Date,
    updated_at?: Date
    slug: string
}
