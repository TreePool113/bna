import Navbar from "@/components/navbar";
import { Links } from "@/components/navlinks";
export default function Courses() {
    return (
        <div>
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Our Courses</h1>
                <p className="mb-2">Explore our wide range of basketball courses designed to help you improve your skills on the court. Whether you're a beginner or looking to enhance your techniques, we have a program suitable for every player.</p>
                <ul className="list-disc list-inside mb-4">
                    <li className="mb-1">Course 1: Basketball Basics</li>
                    <li className="mb-1">Course 2: Shooting Techniques</li>
                    <li className="mb-1">Course 3: Defensive Strategies</li>
                    <li className="mb-1">Course 4: Dribbling and Ball Handling</li>
                    <li className="mb-1">Course 5: Advanced Game Tactics</li>
                </ul>
                <p className="mb-2">Join our community of basketball enthusiasts and take the next step in improving your game with us!</p>
            </div>
        </div>
    );
}