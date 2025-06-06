import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mutuku",
      role: "Fleet Manager, Kenya Transport Co.",
      content: "TotalEnergies has been our trusted fuel partner for over 5 years. Their reliability and quality service keep our fleet running smoothly across Kenya.",
      rating: 5,
      image: "photo-1649972904349-6e44c42644a7"
    },
    {
      name: "James Kiprotich",
      role: "Solar Energy Consultant",
      content: "The renewable energy solutions from TotalEnergies transformed our community center. Clean, efficient, and cost-effective energy for everyone.",
      rating: 5,
      image: "photo-1488590528505-98d2b5aba04b"
    },
    {
      name: "Grace Wanjiku",
      role: "Business Owner, Nairobi",
      content: "Their business energy solutions helped us reduce costs by 30%. Professional service and excellent support throughout the entire process.",
      rating: 5,
      image: "photo-1581091226825-a6a2a5aee158"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-energy-light rounded-full px-4 py-2 border border-energy-secondary/20 mb-6">
            <Quote className="h-4 w-4 text-energy-secondary" />
            <span className="text-sm font-medium text-gray-700">Customer Stories</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins mb-6">
            <span className="text-energy-primary">Trusted by</span>{' '}
            <span className="text-energy-secondary">Thousands</span>{' '}
            <span className="text-gray-700">Across Kenya</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied customers who have experienced the TotalEnergies difference in their business and daily lives.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-6 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/${testimonial.image}?auto=format&fit=crop&w=80&h=80`}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-energy-solar fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;