# Animation System Documentation

This project uses a comprehensive animation system built with **Framer Motion** and **React Intersection Observer** to provide smooth, performant animations throughout the website.

## 🚀 Available Animation Components

### Basic Animations

#### `FadeIn`
Fades in elements when they come into view.
```jsx
import { FadeIn } from '../utils/animations';

<FadeIn delay={0.2} duration={0.6}>
  <h1>This will fade in</h1>
</FadeIn>
```

#### `SlideInUp`, `SlideInLeft`, `SlideInRight`
Slides elements in from different directions.
```jsx
<SlideInUp delay={0.3}>
  <div>Slides up from bottom</div>
</SlideInUp>

<SlideInLeft>
  <div>Slides in from left</div>
</SlideInLeft>
```

#### `ScaleUp`
Scales elements up from 80% to 100% size.
```jsx
<ScaleUp delay={0.1}>
  <div>This will scale up</div>
</ScaleUp>
```

### Advanced Animations

#### `StaggeredList`
Animates children with a staggered delay.
```jsx
<StaggeredList staggerDelay={0.1}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</StaggeredList>
```

#### `AnimatedButton`
Enhanced buttons with hover and tap animations.
```jsx
<AnimatedButton 
  className="btn-primary"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</AnimatedButton>
```

#### `AnimatedCard`
Cards with hover lift effects.
```jsx
<AnimatedCard className="card">
  <h3>Card Title</h3>
  <p>Card content</p>
</AnimatedCard>
```

#### `PageTransition`
Smooth page transitions.
```jsx
<PageTransition>
  <YourPageContent />
</PageTransition>
```

## 🎯 Custom Hooks

### `useScrollAnimation`
Basic scroll-triggered visibility detection.
```jsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const [ref, isVisible] = useScrollAnimation({ threshold: 0.3 });

return (
  <div ref={ref} className={isVisible ? 'visible' : 'hidden'}>
    Content
  </div>
);
```

### `useStaggeredAnimation`
Creates staggered animations for multiple items.
```jsx
const [containerRef, visibleItems] = useStaggeredAnimation(5, 100);

return (
  <div ref={containerRef}>
    {items.map((item, index) => (
      <div 
        key={index}
        className={visibleItems.has(index) ? 'visible' : 'hidden'}
      >
        {item}
      </div>
    ))}
  </div>
);
```

### `useParallax`
Creates parallax scrolling effects.
```jsx
const [ref, offset] = useParallax(0.5);

return (
  <div 
    ref={ref} 
    style={{ transform: `translateY(${offset}px)` }}
  >
    Parallax content
  </div>
);
```

### `useScrollProgress`
Tracks scroll progress (0-100%).
```jsx
const progress = useScrollProgress();

return (
  <div style={{ width: `${progress}%` }}>
    Progress bar
  </div>
);
```

## 💎 Higher-Order Components

### `withScrollAnimation`
Wraps any component with scroll-triggered animations.
```jsx
const AnimatedComponent = withScrollAnimation(MyComponent, {
  duration: 0.8,
  delay: 0.2
});
```

### Pre-configured HOCs
```jsx
import { 
  FadeInSection, 
  SlideInLeftSection, 
  ScaleUpSection 
} from '../utils/animationHelpers';

const AnimatedHero = FadeInSection(Hero);
const AnimatedSidebar = SlideInLeftSection(Sidebar);
```

## 🎨 CSS Animation Classes

The system includes CSS classes for lightweight animations:

```css
/* Fade animations */
.fade-in { /* Base fade in */ }
.slide-in-left { /* Slide from left */ }
.slide-in-right { /* Slide from right */ }
.slide-in-up { /* Slide from bottom */ }
.scale-up { /* Scale up effect */ }

/* Hover effects */
.hover-lift { /* Lift on hover */ }
.hover-scale { /* Scale on hover */ }
.btn-animate { /* Button animations */ }

/* Delay utilities */
.delay-100, .delay-200, ... .delay-1000
```

## ⚙️ Animation Configuration

### Global Settings
```jsx
import { ANIMATION_TIMING, ANIMATION_DELAYS, EASING } from '../utils/animationHelpers';

// Use predefined timing
duration: ANIMATION_TIMING.NORMAL // 0.6s
delay: ANIMATION_DELAYS.SHORT // 0.1s
ease: EASING.EASE_OUT
```

### Animation Presets
```jsx
import { ANIMATION_PRESETS } from '../utils/animationHelpers';

const config = ANIMATION_PRESETS.FADE; // Pre-configured fade animation
```

## 🔧 Best Practices

### Performance
- Use `triggerOnce: true` for animations that should only play once
- Prefer CSS transitions for simple hover effects
- Use `threshold` to control when animations trigger

### UX Guidelines
- Keep animations under 0.8s for good UX
- Use staggered delays for lists (0.1-0.2s between items)
- Provide reduced motion support where needed

### Example Usage in Components
```jsx
import React from 'react';
import { FadeIn, SlideInUp, StaggeredList } from '../utils/animations';

const MyComponent = () => {
  return (
    <div>
      <FadeIn>
        <h1>Main Title</h1>
      </FadeIn>
      
      <SlideInUp delay={0.3}>
        <p>Subtitle that slides up after title</p>
      </SlideInUp>
      
      <StaggeredList staggerDelay={0.1}>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </StaggeredList>
    </div>
  );
};
```

## 📱 Responsive Considerations

All animations respect the user's motion preferences:
```css
@media (prefers-reduced-motion: reduce) {
  /* Animations will be disabled or reduced */
}
```

## 🛠️ Extending the System

To add new animations:

1. Create the component in `utils/animations.js`
2. Add any related hooks in `hooks/useScrollAnimation.js`
3. Export from `utils/index.js`
4. Add CSS classes to `index.css` if needed

This animation system provides everything you need for professional, smooth animations while maintaining excellent performance and user experience.
