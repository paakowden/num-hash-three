import Image from "next/image";

const Gallery = () => {
  return (
    <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/slider2.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/slider2.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/slider2.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/slider2.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/slider2.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/slider2.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/slider2.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/slider2.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/slider2.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/slider2.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/slider2.jpg"
            width={500}
            height={200}
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg hover:scale-90 transition-all"
            src="/images/numt.jpeg"
            width={500}
            height={200}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
