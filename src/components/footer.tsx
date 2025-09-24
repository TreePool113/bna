import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-6 mt-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex space-x-4 mt-4 md:mt-0 gap-50">
                        <Image 
                        alt="Bennu Academy - BNU"
                        width={100}
                        height={100}
                        priority
                        src='/images/logo.png'/>
                        <div>
                            <h3>Bennu Academy - BNU</h3>
                            <p className="text-sm">Address: Khoang san cua Enu</p>
                            <p className="text-sm">Phone: 0123 456 789</p>
                            <p className="text-sm">Email: bennudanphuong@gmail.com</p>
                        </div>
                        <Link href="/terms" className="hover:underline">Terms of Service</Link>
                        <Link href="/contact" className="hover:underline">Contact Us</Link>
                    </div>
                </div>
                <p className="text-sm text-center mt-10">Since 2025 | Bennu Academy - BNU</p>
            </div>
        </footer>
    );
}