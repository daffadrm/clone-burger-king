import Container from "@/components/layouts/Container";
import DisplayCard from "@/components/widgets/DisplayCard";
import CarouselDefault from "@/components/widgets/Carousel";

// import Image from "next/image";
import { menusItem } from "@/contexts/menu-items";

const slides = [
  "https://bkdelivery.co.id/media/slider_image/2024/1/15/k5zx5lnjaqjykyqkmcpm2k.jpg",
  "https://bkdelivery.co.id/media/slider_image/2023/11/15/wq6t8n4pyjrmgxkuko82gj.jpg",
  "https://bkdelivery.co.id/media/slider_image/2023/10/25/sqpdvobbwsqgefrvfj3asb.jpg",
  "https://bkdelivery.co.id/media/slider_image/2024/1/12/vym2tchnhmn7864ton9q54.jpg",
  "https://bkdelivery.co.id/media/slider_image/2023/12/21/gahgzzdchy98rkwrrqbyt5.jpg",
]
export default function Home() {
  return (
    // <h2>tess</h2>
    <Container title="Home">
      {/* <Carousel autoSlide={true} >
          {[...slides.map((s, index) => (
            <img src={s} key={index}/>
          ))]}
        </Carousel> */}
        <CarouselDefault images={slides}/>
      <h2 className="font-primary text-branding-accent-secondary text-2xl text-center">
        OUR MENUS
      </h2>

      <section className="center-container lg:gap-4 lg:grid-cols-3 grid grid-cols-2 gap-3 px-4">
        {menusItem.map(({ id, thumbnailUrl, displayName }) => (
          <DisplayCard
            key={id}
            navigateTo={`/menus/${id}`}
            title={displayName}
            imageSrc={thumbnailUrl}
          />
        ))}
      </section>
    </Container>
  );
}
