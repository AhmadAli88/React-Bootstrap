
# Tailwind CSS with tailwind-merge in React

This project demonstrates effective use of the `tailwind-merge` utility in a React project to manage and merge Tailwind CSS class names. With `tailwind-merge`, you can avoid conflicts, handle conditional classes, and streamline styling in a clean and efficient way.

## Installation

### Step 1: Install tailwind-merge

To get started, install the `tailwind-merge` package via npm:

```bash
npm install tailwind-merge
```

### Step 2: Import it in Your Component File

```javascript
import { twMerge } from 'tailwind-merge';
```

## Usage

`tailwind-merge` is perfect for merging Tailwind classes, avoiding duplication, and managing conditional styling. Below are common use cases and code examples.

### 1. Basic Class Merging

Override default classes conditionally:

```javascript
const Button = ({ isLarge }) => {
  return (
    <button
      className={twMerge(
        "px-4 py-2 bg-blue-500 text-white",
        isLarge ? "px-8 py-4" : "px-4 py-2"
      )}
    >
      Click Me
    </button>
  );
};
```

If `isLarge` is `true`, `px-8 py-4` will override `px-4 py-2`.

### 2. Conditional Styling Based on Props

Apply styles based on prop values:

```javascript
const Alert = ({ type }) => {
  return (
    <div
      className={twMerge(
        "p-4 border",
        type === "error" && "bg-red-100 border-red-500 text-red-700",
        type === "success" && "bg-green-100 border-green-500 text-green-700"
      )}
    >
      {type === "error" ? "Error!" : "Success!"}
    </div>
  );
};
```

### 3. Overriding Default Classes

Override classes conditionally, such as changing background or shadow:

```javascript
const Card = ({ highlight }) => {
  return (
    <div
      className={twMerge(
        "bg-white p-6 shadow-md",
        highlight && "bg-yellow-100 shadow-lg"
      )}
    >
      This is a card.
    </div>
  );
};
```

### 4. Combining Dynamic and Static Classes

Combine dynamic values with static classes:

```javascript
const DynamicPaddingBox = ({ paddingSize }) => {
  return (
    <div className={twMerge("bg-gray-100", `p-${paddingSize}`)}>
      Content with dynamic padding
    </div>
  );
};
```

### 5. Conditional Styling with JSX Expressions

Apply classes conditionally in JSX expressions:

```javascript
const Badge = ({ isNew, isHighlighted }) => {
  return (
    <span
      className={twMerge(
        "px-2 py-1 rounded",
        isNew ? "bg-blue-500 text-white" : "bg-gray-300 text-black",
        isHighlighted && "ring-2 ring-blue-700"
      )}
    >
      {isNew ? "New" : "Old"}
    </span>
  );
};
```

### 6. Merging Multiple Dynamic Classes

Handle multiple class conditions based on props:

```javascript
const Button = ({ isPrimary, isDisabled }) => {
  return (
    <button
      className={twMerge(
        "p-2 rounded-md",
        isPrimary ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700",
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
      disabled={isDisabled}
    >
      Button
    </button>
  );
};
```

### 7. Using tailwind-merge with CSS Modules

Combine Tailwind classes with CSS modules:

```javascript
import styles from "./Button.module.css";

const Button = ({ isPrimary }) => {
  return (
    <button
      className={twMerge(
        "px-4 py-2 rounded",
        isPrimary ? "bg-blue-500 text-white" : "bg-gray-300 text-black",
        styles.customButton
      )}
    >
      Custom Button
    </button>
  );
};
```

### 8. Dynamic Component Variants

Apply styles based on component variants:

```javascript
const Button = ({ variant }) => {
  const variantClasses = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-500 text-white",
    danger: "bg-red-500 text-white",
  };

  return (
    <button className={twMerge("px-4 py-2 rounded", variantClasses[variant])}>
      {variant} Button
    </button>
  );
};
```

### 9. Managing Responsive Classes

Override classes based on screen size:

```javascript
const ResponsiveBox = ({ isLarge }) => {
  return (
    <div
      className={twMerge(
        "p-4 md:p-6 lg:p-8",
        isLarge && "md:p-10 lg:p-12"
      )}
    >
      Responsive Content
    </div>
  );
};
```

### 10. Custom Component Class Merging

Centralize class merging with a utility function:

```javascript
const useMergedClasses = (baseClasses, additionalClasses) => {
  return twMerge(baseClasses, additionalClasses);
};

// Usage
const CustomComponent = ({ isActive }) => {
  const classes = useMergedClasses(
    "text-lg font-semibold",
    isActive ? "text-blue-600" : "text-gray-500"
  );

  return <div className={classes}>Custom Component</div>;
};
```

## Summary

`tailwind-merge` enhances your styling workflow in React by:
- Reducing redundant class declarations
- Handling conflicts gracefully
- Supporting conditional, responsive, and dynamic styling

Try it out to make your React components more scalable, maintainable, and efficient!
