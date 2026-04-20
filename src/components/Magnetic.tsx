import { useEffect, useRef, type ReactElement } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

interface MagneticProps {
    children: ReactElement;
    strength?: number;
}

export default function Magnetic({ children, strength = 0.5 }: MagneticProps) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 15, stiffness: 150, mass: 0.1 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;
            const { clientX, clientY } = e;
            const { left, top, width, height } = ref.current.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const distanceX = clientX - centerX;
            const distanceY = clientY - centerY;

            if (Math.abs(distanceX) < width && Math.abs(distanceY) < height) {
                x.set(distanceX * strength);
                y.set(distanceY * strength);
            } else {
                x.set(0);
                y.set(0);
            }
        };

        const handleMouseLeave = () => {
            x.set(0);
            y.set(0);
        };

        window.addEventListener('mousemove', handleMouseMove);
        const currentRef = ref.current;
        currentRef?.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            currentRef?.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength, x, y]);

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY, display: 'inline-block' }}
        >
            {children}
        </motion.div>
    );
}
