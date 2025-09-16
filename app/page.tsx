import React from "react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layouts/Container";

function Home() {
    return (
        <Container>
            <h1>Home</h1>
            <p className="text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque esse, doloribus cupiditate fuga
                temporibus sequi, libero hic maxime itaque inventore excepturi cumque veniam repudiandae atque iusto
                dolor sapiente placeat? Doloribus!
            </p>
            
            <Button>Button</Button>
        </Container>
    );
}

export default Home;
