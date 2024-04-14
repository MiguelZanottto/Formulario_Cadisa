import {HttpClient} from "@angular/common/http";
import {Product} from "../models/Product";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ProductService{
  constructor(private http:HttpClient) {
  }

  getAllProducts(){
    return this.http.get<Product[]>('http://localhost:3000/product')
  }

  getProductById(id:string){
    return this.http.get<Product>('http://localhost:3000/product/'+id)
  }

  addProduct(product:Product){
    return this.http.post<Product>('http://localhost:3000/product',product)
  }

  updateProduct(product:Product){
    return this.http.put<Product>('http://localhost:3000/product/'+product.id,product)
  }

  deleteProduct(id:string){
    return this.http.delete<Product>('http://localhost:3000/product/'+id)
  }
}
