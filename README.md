# Laravel React CSRF Input Component

Use like this:

```jsx
import React from "react";
import CSRFInput from "laravel-react-csrf-input";

const Form = () => {
	return (
		<form method="POST">
			<CSRFInput token={myCsrfTokenTakenFromMetaTag}>
		</form>
	);
};
```