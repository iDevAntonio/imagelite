'use client';
import { Template } from "@/components";

export default function NotFoundPage() {
    return (
        <Template>
            <section>
                <h1 className="text-gray-900 text-xl text-center">Page not found!</h1>
                <h1 className="text-gray-900 text-4xl font-bold text-center">404</h1>
            </section>
        </Template>
    );
}