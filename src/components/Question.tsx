import { ReactNode } from "react";
import cx from "classnames";

type QuestionProps = {
	content: string;
	author: {
		name: string;
		avatar: string;
	};
	children?: ReactNode;
	isHighlighted?: boolean;
	isAnswered?: boolean;
};

export function Question({
	content,
	author,
	children,
	isAnswered = false,
	isHighlighted = false,
}: QuestionProps) {
	return (
		<div
			// className={`question ${isAnswered ? "answered" : ""} ${
			// 	isHighlighted ? "highlighted" : ""
			// }`}

			className={cx(
				"question",
				{ answered: isAnswered },
				{ highlighted: isHighlighted && !isAnswered }
				//A CLASSE HIGHLIGHT SO SE APLICA HIGHLIGHT SE A QUESTION NAO TIVER RESPONDIDA
			)}
		>
			<p>{content}</p>
			<footer>
				<div className="user-info">
					<img src={author.avatar} alt={author.name} />
					<span>{author.name}</span>
				</div>
				<div>{children}</div>
			</footer>
		</div>
	);
}
