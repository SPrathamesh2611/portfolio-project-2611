import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Mail, Send, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: MapPin,
    title: 'My Location',
    lines: ['Prabhadevi', 'Mumbai – 400 025'],
  },
  // {
  //   icon: Phone,
  //   title: 'Phone Number',
  //   lines: ['+91 9833313287'],
  // },
  {
    icon: Mail,
    title: 'Email Address',
    lines: ['spratham2611@gmail.com'],
  },
];

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   // Simulate form submission
  //   await new Promise((resolve) => setTimeout(resolve, 1000));

  const [showQR, setShowQR] = useState(false);
  const handleCoffeeClick = () => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      window.location.href =
        "upi://pay?pa=sprathamesh2611-1@okicici&pn=Prathamesh&cu=INR";
    } else {
      setShowQR(true);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_irnbu2a",
        "template_zs31fwa",
        formData,
        "ghhhFeuXKdWypyrTM"
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({ name: '', email: '', subject: '', message: '' });

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message.",
      });
    }

    setIsSubmitting(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Let's Connect!</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-card rounded-2xl p-8 card-shadow border border-border/50 h-full">
              <h3 className="text-xl font-bold text-foreground mb-8">Contact Info</h3>

              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      {item.lines.map((line, i) => (
                        <p key={i} className="text-muted-foreground text-sm">{line}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Buy Me a Coffee */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="mt-6"
              >
                <h4 className="font-semibold text-foreground mb-2">Buy Me a Coffee</h4>

                <Button
                  size="lg"
                  className="w-full sm:w-auto gradient-bg text-primary-foreground hover:opacity-90"
                  onClick={handleCoffeeClick}
                >
                  Support My Work
                  <Coffee className="ml-2" size={18} />
                </Button>
                {showQR && (
                  <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
                    <div className="bg-white rounded-xl p-6 text-center max-w-sm">

                      <h3 className="text-lg font-semibold mb-4">
                        Scan to Support ☕
                      </h3>

                      <img
                        src="/upi-qr.jpeg"
                        alt="UPI QR"
                        className="mx-auto mb-4"
                      />

                      <p className="text-sm text-gray-600 mb-4">
                        Scan this QR with GPay / PhonePe
                      </p>

                      <Button
                        onClick={() => setShowQR(false)}
                        className="gradient-bg text-white"
                      >
                        Close
                      </Button>

                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl p-8 card-shadow border border-border/50">
              <h3 className="text-xl font-bold text-foreground mb-8">Get In Touch</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background border-border focus:border-primary"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12 bg-background border-border focus:border-primary"
                  />
                </div>
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="h-12 bg-background border-border focus:border-primary"
                />
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-background border-border focus:border-primary resize-none"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto gradient-bg text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
