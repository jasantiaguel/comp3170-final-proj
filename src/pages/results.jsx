import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./results.module.css";

export default function Results() {
    const result = useLocation().state.result;
    console.log(result);

    return (
        <div className={styles.background}>
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <div className={styles.content}>
                        <h1 className={styles.heading}>Results</h1>
                        <motion.p
                            className={styles.score}
                            initial={{ scale: 0.5 }} 
                            animate={{ scale: [1, 1.5, 0.8, 1] }} 
                            transition={{
                                duration: 1.5,
                                ease: "easeInOut", 
                            }}
                        >
                            Your Score: {result}
                        </motion.p>
                        <Link className={styles.link} to="/">Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
