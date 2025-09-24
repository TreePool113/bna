import Navbar from "@/components/navbar";
import { Links } from "@/components/navlinks";
export default function Team() {
    return (
        <div>
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Our Team</h1>
                <p className="mb-2">Meet the dedicated team behind our organization. Our team is composed of passionate individuals who are committed to delivering the best services and experiences to our community.</p>
                <ul className="list-disc list-inside mb-4">
                    <li className="mb-1">John Doe - Founder & CEO: With over 20 years of experience in the industry, John leads our team with a vision for excellence and innovation.</li>
                    <li className="mb-1">Jane Smith - Head Coach: Jane brings a wealth of knowledge and expertise in basketball coaching, helping players of all levels reach their full potential.</li>
                    <li className="mb-1">Mike Johnson - Operations Manager: Mike ensures that our day-to-day operations run smoothly, coordinating events and managing logistics.</li>
                    <li className="mb-1">Emily Davis - Marketing Director: Emily is responsible for promoting our brand and engaging with our community through various marketing strategies.</li>
                    <li className="mb-1">Sarah Lee - Customer Support Lead: Sarah and her team are dedicated to providing exceptional support to our members, addressing their needs and concerns promptly.</li>
                </ul>
                <p className="mb-2">Together, our team works tirelessly to create a positive and inclusive environment for all our members. We are proud of the diverse talents and backgrounds that each team member brings to the table.</p>
                <p className="mb-2">Feel free to reach out to any of our team members for assistance or inquiries. We are here to help you on your journey!</p>
            </div>
        </div>
    );
}