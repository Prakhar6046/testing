'use client'
import React from 'react';

type ComponentProps = {
    content: string
};

export const HipaaParagraphBlock: React.FC<ComponentProps> = ({ content }) => {
    return (
        <section>
            <div className="container mx-auto px-4 mt-2 sm:mt-6 lg:mt-8 pb-8 sm:pb-14 lg:pb-20">
                <p className="text-center">{content || ''}</p>
            </div>
        </section>
    );
};
