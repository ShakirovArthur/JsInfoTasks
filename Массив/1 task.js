const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor(styles.length - 1) / 2] = "Классика";
styles.shift();
styles.unshift("Рэп", "Регги");
console.log(styles);
