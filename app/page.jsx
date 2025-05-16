"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Redirecting() {
    const router = useRouter();

    useEffect(() => {
        router.push("/login");
    }, [router]);
	
return (
	<p>Redirecting …</p>
);
}