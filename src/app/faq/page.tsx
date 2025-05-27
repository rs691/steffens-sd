import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "What types of custom woodworking projects do you undertake?",
    answer: "We create a wide range of custom pieces, including furniture (tables, chairs, beds), cabinetry (kitchen, bathroom, built-ins), home decor, office setups, and unique art pieces. If you have a specific idea, feel free to discuss it with us!"
  },
  {
    question: "How does the custom project process work?",
    answer: "It starts with a consultation to understand your needs, style, and budget. Then, we move to design, where we create sketches or 3D models. Once approved, we begin crafting. We keep you updated throughout the process and finish with delivery and installation if needed."
  },
  {
    question: "What materials do you typically use?",
    answer: "We work with a variety of high-quality woods, including hardwoods like oak, walnut, maple, and cherry, as well as softwoods like pine and cedar. We also incorporate other materials like metal, glass, or epoxy resin based on the design. We prioritize sustainably sourced materials."
  },
  {
    question: "How long does a custom project usually take?",
    answer: "Project timelines vary greatly depending on the complexity, size, and our current workload. Smaller items might take a few weeks, while larger projects like kitchen cabinetry can take several months. We'll provide an estimated timeline after the design phase."
  },
  {
    question: "How is pricing determined for custom projects?",
    answer: "Pricing is based on factors such as the complexity of the design, the type and amount of materials used, the size of the piece, and the estimated labor involved. We provide a detailed quote after the initial design consultation."
  },
  {
    question: "Do you offer delivery and installation?",
    answer: "Yes, we offer delivery services. For pieces that require it, such as built-in cabinetry or large furniture, we also provide professional installation to ensure a perfect fit and finish."
  },
  {
    question: "Can you work with a design I already have?",
    answer: "Absolutely! We're happy to work from your existing designs, sketches, or inspiration photos. We can also collaborate with your interior designer or architect."
  },
  {
    question: "What is your policy on deposits and payments?",
    answer: "Typically, we require a deposit (usually 50%) to secure your project and cover material costs. The remaining balance is due upon completion or prior to delivery. We'll outline the specific payment schedule in your project agreement."
  }
];

export default function FaqPage() {
  return (
    <div className="py-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4 flex items-center justify-center">
          <HelpCircle className="w-10 h-10 mr-3 text-accent" />
          Frequently Asked Questions
        </h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Find answers to common questions about our custom woodworking services, process, and policies.
        </p>
      </section>

      <section className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card shadow-md rounded-lg border border-border hover:border-primary/50 transition-colors">
              <AccordionTrigger className="p-6 text-lg font-medium text-left hover:no-underline text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-foreground/90 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
       <section className="text-center mt-12">
        <p className="text-lg text-foreground/80">
          Can't find your question? <a href="/contact" className="text-accent font-semibold hover:underline">Contact us</a> directly for more information.
        </p>
      </section>
    </div>
  );
}
