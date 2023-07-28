# BlogTemplate

BlogTemplate is a simple blog template built with React.js and vanilla CSS. It includes reusable components and well-documented CSS with variables.

## Installation

To install BlogTemplate, clone the repository and run `npm install`:
- `git clone https://github.com/dvip1/blogTemplate.git` 
- `cd blogTemplate` 
- `npm install`


## Usage

To use BlogTemplate, import the components you need and pass in the necessary props. Here's an example:

```jsx
import BlogBody from './components/BlogBody';

const App = () => {
  const data = [
    { id: 1, data: 'This is the first paragraph.' },
    { id: 2, data: 'This is the second paragraph.' },
    { id: 3, data: 'This is the third paragraph.' },
  ];

  return (
    <div>
      <BlogBody dropPara={data[0].data} data={data} />
    </div>
  );
};

```

## Components

- **BlogBody**: Renders the main body of the blog post with a drop cap on the first paragraph.

- **DropPara**: Renders a drop cap for the first paragraph.

- **Para**: Renders a regular paragraph.

## CSS

BlogTemplate's CSS is well-documented with variables. Here are the available variables:

```css
--font1: The primary font family.
--font2: The secondary font family.
--font3: The tertiary font family.
--font4: The decorative font family.
```

## License

BlogTemplate is licensed under the MIT license. See [LICENSE](LICENSE) for more information.