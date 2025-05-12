import Image from "next/image";
import Link from "next/link";
import { Podcast } from "@/data/messages";

interface PodcastRecommendationProps {
  podcast: Podcast;
}

interface RecommendationProps {}

export const PodcastRecommendation = ({
  podcast,
}: PodcastRecommendationProps) => {
  const { title, description, imageUrl, link } = podcast;
  return (
    <div className="flex border mt-12 border-black/10 w-[60vw]">
      <div className="flex flex-col mr-12 mt-4">
        <span className="font-bold">{title}</span>
        <span className="text-sm">{description}</span>
        <div className="flex">
          <Link href={link} className="flex px-2">
            <button className="bg-iheart-red rounded-full px-1 py-1 text-xs text-white">
              Play Episode
            </button>
          </Link>
          <Link href={link} className="flex px-2">
            <button className="border border-iheart-red rounded-full text-xs px-1 py-2 text-iheart-red">
              Play Episode
            </button>
          </Link>
        </div>
      </div>
      <Image
        src={imageUrl}
        alt="podcast image"
        width={100}
        height={150}
        className="object-contain ml-2"
      />
    </div>
  );
};
