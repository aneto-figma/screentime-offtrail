import '../src/index.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Documentation',
          'Components', [
            'Branding', ['Logo', 'Wordmark'],
            'Avatar',
            'Facepile',
            'Icon',
            'BrandIcon',
            'Button',
            'IconButton',
            'Chip',
            'Form Fields', [
              'TextInput',
              'Textarea',
              'SearchInput',
              'Dropdown',
              'Checkbox',
              'Radio',
              'RadioGroup',
              'SwitchField',
            ],
            'Nav',
            'EventNav',
            'PageHeader',
            'CardEvent',
            'CardGuide',
            'Map', ['MapView', 'MapPin', 'MapUserLocation'],
            'WidgetCompass',
          ],
        ],
      },
    },
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo"
    }
  },
};

export default preview;