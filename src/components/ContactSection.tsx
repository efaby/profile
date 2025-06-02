
import { Mail, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'alex.johnson@email.com',
      action: 'mailto:alex.johnson@email.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'San Francisco, CA',
      action: '#'
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always open to discussing new opportunities, interesting projects, 
                or just having a friendly chat about technology and design.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="glass-morphism border-white/10 hover:glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{info.title}</h4>
                        <a 
                          href={info.action}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="p-6 glass-morphism border-white/10 rounded-lg">
              <h4 className="font-semibold mb-3">Why Work With Me?</h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Collaborative approach to problem-solving</li>
                <li>• Clear communication throughout the project</li>
                <li>• Timely delivery and professional service</li>
                <li>• Ongoing support and maintenance</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="glass-morphism border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input 
                      placeholder="First Name" 
                      className="bg-white/5 border-white/10"
                    />
                    <Input 
                      placeholder="Last Name" 
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <Input 
                    type="email" 
                    placeholder="Email Address" 
                    className="bg-white/5 border-white/10"
                  />
                  <Input 
                    placeholder="Subject" 
                    className="bg-white/5 border-white/10"
                  />
                  <Textarea 
                    placeholder="Your message..." 
                    rows={6}
                    className="bg-white/5 border-white/10"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
