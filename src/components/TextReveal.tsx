import { motion } from 'motion/react';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    stagger?: boolean;
}

export default function TextReveal({ text, className = "", delay = 0, stagger = false }: TextRevealProps) {
    if (!stagger) {
        return (
            <div className={className} style={{ overflow: 'hidden', display: 'inline-block' }}>
                <motion.span
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{
                        duration: 1,
                        delay,
                        ease: [0.33, 1, 0.68, 1]
                    }}
                    style={{ display: 'block' }}
                >
                    {text}
                </motion.span>
            </div>
        );
    }

    const characters = text.split("");

    return (
        <div className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
            {characters.map((char, i) => (
                <div key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: delay + i * 0.03,
                            ease: [0.33, 1, 0.68, 1]
                        }}
                        style={{ display: 'block' }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                </div>
            ))}
        </div>
    );
}
