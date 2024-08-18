import { ContactForm } from "."

export default function SuggestionBox() {
  return (
    <>
      <section className="lg:max-w-4xl lg:mx-auto px-5">
        <p className="text-center mt-10 text-2xl">
          Do you see anything you would like to be improved
        </p>

        <ContactForm />
      </section>
    </>
  )
}
