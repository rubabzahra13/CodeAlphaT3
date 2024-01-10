CREATE DATABASE online_library;
USE online_library;
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    genre VARCHAR(100),
    isbn VARCHAR(100),
    year INT,
    description TEXT,
    available_copies INT DEFAULT 1
);
SHOW TABLES;
INSERT INTO books (title, author, genre, isbn, year, description, available_copies)
VALUES 
('Pride and Prejudice', 'Jane Austen', 'Novels', '9781503290563', 1813, 'Pride and Prejudice is a romantic novel that centers on the character of Elizabeth Bennet, a strong-willed and intelligent young woman. The narrative delves into issues of marriage, morality, and misconceptions, set against the backdrop of rural England in the early 19th century. The novel is celebrated for its wit, its insightful exploration of the complexities of human relationships, and its vivid portrayal of rural society.', 1),
('El amor en los tiempos del cólera', 'Gabriel García Márquez', 'Foreign Language', '9780307389732', 1985, 'El amor en los tiempos del cólera, or Love in the Time of Cholera in English, is a profound exploration of love, passion, and commitment, telling the story of Fermina Daza and her two suitors, Florentino Ariza and Dr. Juvenal Urbino. Spanning over half a century in an unnamed South American city, the novel beautifully encapsulates the entirety of human emotions associated with love, from the ecstatic heights of passionate love to the quiet comforts of domestic affection.', 1),
('Fermat''s Enigma: The Epic Quest to Solve the World''s Greatest Mathematical Problem', 'Simon Singh', 'Math', '9780385493628', 1997, 'Fermat’s Enigma focuses on the world''s most famous mathematical problem, Fermat’s Last Theorem, which eluded solution for centuries. The book chronicles the history of this elusive equation and details the story of Andrew Wiles, the British mathematician who finally solved the theorem in 1994. The narrative combines mathematical intrigue with human drama, including Wiles''s childhood fascination with the problem and the intense scrutiny his solution received from the mathematics community.', 1),
('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 'History', '9780062316097', 2011, 'Sapiens offers a compelling overview of human history. From the emergence of Homo sapiens in Africa to the rise of technological and scientific advancements, Yuval Noah Harari explores how humans have come to dominate the planet. The book covers key turning points in human history, including the Cognitive Revolution, the Agricultural Revolution, and the rise of empires, all the while questioning what these developments mean for our understanding of humanity and the future of our species.', 1),
('The Immortal Life of Henrietta Lacks', 'Rebecca Skloot', 'Medical', '9781400052172', 2010, 'This book tells the remarkable story of Henrietta Lacks, whose cells were taken without her knowledge in 1951 and became one of the most important tools in medicine. Known as HeLa cells, they were vital for developing the polio vaccine, uncovering secrets of cancer and viruses, and advancing biomedical research. Yet Henrietta''s family did not learn of her “immortality” for decades, and the book raises critical questions about ethics, privacy, and the interplay of race and medicine.', 1);


INSERT INTO books (title, author, genre, isbn, year, description, available_copies, imgsrc)
VALUES 
('To Kill a Mockingbird', 'Harper Lee', 'Novels', '9780061120084', 1960, 'A novel of great moral strength, portraying the prejudices and racial discrimination in the American South through the eyes of a young girl, Scout Finch. Her father, Atticus Finch, a lawyer, represents a black man accused of raping a white woman, causing turmoil in their small town.', 1, 'https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UF1000,1000_QL80_.jpg'),
('Der Vorleser', 'Bernhard Schlink', 'Foreign Language', '9783257229530', 1995, 'A poignant story set in post-WWII Germany, focusing on the relationship between Michael Berg, a German teenager, and Hanna Schmitz, an older woman. As their story unfolds, it delves into themes of guilt, secrecy, and the complexities of the human heart.', 1, 'https://m.media-amazon.com/images/I/71qJkIbi5AL._AC_UF1000,1000_QL80_.jpg'),
('The Code Book: The Science of Secrecy from Ancient Egypt to Quantum Cryptography', 'Simon Singh', 'Math', '9780385495325', 1999, 'This book explores the hidden world of codes and code breaking - from ancient texts through computer encryption. Singh offers a compelling look at the history of cryptography and its profound impact on the course of history.', 1, 'https://m.media-amazon.com/images/I/71fSWKBI1CL._AC_UF1000,1000_QL80_.jpg'),
('Guns, Germs, and Steel: The Fates of Human Societies', 'Jared Diamond', 'History', '9780393061314', 1997, 'Jared Diamond''s book is a trans-disciplinary journey explaining why Eurasian civilizations have historically been able to dominate others. He argues that environmental factors, rather than racial genetics, have shaped the modern world.', 1, 'https://m.media-amazon.com/images/I/61p99wdheKL._AC_UF1000,1000_QL80_.jpg'),
('The Emperor of All Maladies: A Biography of Cancer', 'Siddhartha Mukherjee', 'Medical', '9781439170915', 2010, 'This book is a comprehensive ''biography'' of cancer - from its first documentation thousands of years ago through the epic battles in the 20th century to cure, control, and conquer it, to a radical new understanding of its essence.', 1, 'https://m.media-amazon.com/images/I/81pplpQ4JDL._AC_UF1000,1000_QL80_.jpg');
