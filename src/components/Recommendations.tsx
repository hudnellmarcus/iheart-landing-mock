import Image from "next/image";
import Link from "next/link";
import { Podcast, Recommendation } from "@/data/messages";

interface PodcastRecommendationProps {
  podcast: Podcast;
}

interface StyleRecommendationProps {
  recommendation: Recommendation;
}

export const PodcastRecommendation = ({
  podcast,
}: PodcastRecommendationProps) => {
  const { title, description, imageUrl, link, message } = podcast;
  return (
    <div className="flex flex-col">
      <p className="font-medium text-black text-sm md:text-base p-2">{message}</p>
      <div className="flex border justify-between rounded-lg border-black/10 md:w-[50vw]">
        <div className="flex flex-col ml-6 mt-4">
          <span className="font-bold text-sm md:text-base">{title}</span>
          <span className="text-xs md:text-sm mr-2 py-2">{description}</span>
          <div className="flex mb-2 mt-2">
            <Link href={link} className="flex">
              <button className="bg-iheart-red rounded-full px-4 py-2 mt-3 text-xs text-white">
                Play Episode
              </button>
            </Link>
            <Link
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex px-2"
            >
              <button className="border border-iheart-red rounded-full px-8 py-2 mt-3 text-xs text-iheart-red">
                Follow
              </button>
            </Link>
          </div>
        </div>
        <Image
          src={imageUrl}
          alt="podcast image"
          width={159}
          height={150}
          className="object-contain ml-2 hidden md:block"
        />
      </div>
    </div>
  );
};

export const StyleRecommendation = ({
  recommendation,
}: StyleRecommendationProps) => {
  const { title, description, imageUrl, link, message } = recommendation;
  return (
    <div className="flex flex-col">
      <p className="font-medium text-black text-sm md:text-base p-2">{message}</p>
      <div className="flex border justify-between rounded-md border-black/10 md:w-[50vw]">
        <div className="flex flex-col ml-6 mt-4">
          <span className="font-bold text-sm md:text-base">{title}</span>
          <span className="text-sm mb-2 py-2">{description}</span>
          <div className="flex">
            <Link href={link} className="flex px-2">
              <button className="bg-iheart-red rounded-full px-4 py-2 mb-2 mt-3 text-xs text-white">
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        <Image
          src={imageUrl}
          alt="podcast image"
          width={164}
          height={122}
          className="object-contain ml-2"
        />
      </div>
    </div>
  );
};
