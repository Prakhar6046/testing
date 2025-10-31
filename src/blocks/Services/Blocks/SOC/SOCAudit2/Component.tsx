import { Media } from '@/payload-types';
import Image from 'next/image';

type ChecklistItem = {
    text: string;
    icon: Media;
};

type ComponentProps = {
    title: string;
    introParagraph: string;
    listItems: { item: string }[];
    mainParagraph: string;
    subTitle: string;
    checklist: ChecklistItem[];
    image: Media;
};

export const Soc2Block: React.FC<ComponentProps> = ({
    title,
    introParagraph,
    listItems,
    mainParagraph,
    subTitle,
    checklist,
    image
}) => {
    return (
        <section>
            <div className="container mx-auto px-4 py-8 sm:py-14 lg:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Column */}
                    <div className="order-2 lg:order-1">
                        <h2 className="font-bold text-2xl sm:text-3xl lg:text-[38px] leading-[1.2em] mt-1.5 mb-3">
                            {title || ""}
                        </h2>

                        {introParagraph && <p>{introParagraph}</p>}

                        {listItems?.length > 0 && (
                            <ul className="list-disc ms-5 my-2">
                                {listItems.map((li, idx) => (
                                    <li key={idx}>{li.item}</li>
                                ))}
                            </ul>
                        )}

                        {mainParagraph && <p>{mainParagraph}</p>}

                        <div className="my-auto mt-3">
                            {subTitle && (
                                <p className="font-bold text-lg sm:text-xl mb-3">{subTitle}</p>
                            )}

                            {Array.isArray(checklist) && checklist.length > 0 && (
                                <ul className="flex flex-col gap-3 mt-5">
                                    {checklist.map((check, idx) => (
                                        <li key={idx} className="flex items-start gap-2">
                                            {check?.icon?.url && (
                                                <Image
                                                    src={check.icon.url}
                                                    width={22}
                                                    height={22}
                                                    alt="Check Icon"
                                                    className="mt-[1px]"
                                                />
                                            )}
                                            {check.text}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="order-1 lg:order-2">
                        {image?.url && (
                            <Image
                                src={image.url}
                                width={590}
                                height={365}
                                alt={title || "SOC 2 Image"}
                                className="rounded-[14px] object-cover w-full mx-auto h-full shadow-[0_0_30px_-6px_rgba(0,0,0,0.25)]"
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
