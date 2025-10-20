import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "The Rise of Multi-Agent Intelligence",
    paragraph:
      "How collaborative AI systems are redefining problem-solving across industries.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Levis Frenci",
      image: "/images/blog/author-03.png",
      designation: "Founder @Line Edge",
    },
    tags: ["Collaboration"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Designing Smarter Connections Between Machines",
    paragraph:
      "Exploring how Airu Labs builds communication layers that make AI truly cooperative.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Dr. Maya Musharaf",
      image: "/images/blog/author-02.png",
      designation: "AI Researcher",
    },
    tags: ["Connectivity"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "From Models to Ecosystems",
    paragraph:
      "Why the future of AI lies in networks of interacting agents, not isolated models.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Axel Deo",
      image: "/images/blog/author-03.png",
      designation: "CTO",
    },
    tags: ["Evolution"],
    publishDate: "2025",
  },
];
export default blogData;
