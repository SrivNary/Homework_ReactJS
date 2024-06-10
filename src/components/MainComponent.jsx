import { ProductComponent } from './ProductCard'
import { CTACardComponent } from './CTACardComponent'

export default function MainComponent() {
  return (
    <div>
        <main className="flex flex-col gap-10">
            <section className="flex justify-center gap-5">
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
                <ProductComponent/>
            </section>
            <section className="flex justify-center gap-5">
                    <CTACardComponent/>
                    <CTACardComponent/>
                    <CTACardComponent/>
                    <CTACardComponent/>
            </section>
        </main>
      
    </div>
  )
}
