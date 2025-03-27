"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        router.push("/signin");
    }, [router]);
	
return (
    <div className={styles.firstPage}>
	    <p>Redirecting …</p>
        <img src="" alt="" />
    </div>
);
}
