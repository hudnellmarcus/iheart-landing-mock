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
  const { title, description, imageUrl, link } = podcast;
  return (
    <div className="flex border mt-12 justify-between rounded-lg border-black/10 w-[60vw]">
      <div className="flex flex-col ml-6 mt-4">
        <span className="font-bold">{title}</span>
        <span className="text-sm">{description}</span>
        <div className="flex mb-2 mt-2">
          <Link href={link} className="flex">
            <button className="bg-iheart-red rounded-full px-4 py-2 mt-3 text-xs text-white">
              Play Episode
            </button>
          </Link>
          <Link href={link} target="_blank" rel="noopener noreferrer" className="flex px-2">
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
        className="object-contain ml-2"
      />
    </div>
  );
};

export const StyleRecommendation = ({
  recommendation,
}: StyleRecommendationProps) => {
  const { title, description, imageUrl, link } = recommendation;
  return (
    <div className="flex border justify-between mt-12 rounded-md border-black/10 w-[60vw]">
      <div className="flex flex-col ml-6 mt-4">
        <span className="font-bold">{title}</span>
        <span className="text-sm mb-2">{description}</span>
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
  );
};
