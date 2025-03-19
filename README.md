# Documenting My Thought Process

## WHAT I Wanted to Achieve

1. **Keep the app state simple** – No unnecessary complexity.
2. **Avoid useEffect hell** – Fetching data shouldn't feel like a nightmare.
3. **Handle errors and loading states gracefully** – Users AND developer should have a smooth experience.
4. **Deal with race conditions and timeouts properly** – No unnecessary network calls.
5. **Share the search state across components** – My Search Box + Tags should stay in sync with the app without too many boilerplate.
6. **Build reusable and composable components** – I want to isolate my components into reusable and composible pieces.
7. **Support "Tab" keyboard navigation** – I want to navigate back and fort using Tab, Shift+Tab, and Enter to choose my desired option.

## HOW I Built It

- **React Query for server state management** – Handles fetching, caching, and loading/error states out of the box.
- **Zustand for shared state** – A simple, lightweight way to keep the search param accessible across components.
- **AbortController for race conditions & timeouts** – Ensures we don’t process outdated or slow requests.
- **Pure & reusable components** – Focused on keeping components modular and composable.

## WHY I Made These Choices

### **1 + 2 + 3 → React Query is a lifesaver**

I didn’t want to manually manage API calls, error states, or loading indicators. React Query does all this while eliminating the need for `useEffect`-based data fetching (which, let’s be real, gets messy fast).

### **4 → Handling race conditions & timeouts**

React Query supports **request cancellation** via `signal`. By passing its `signal` to my `fetchFunction`, it automatically cancels stale requests. I also added an **AbortController** to handle timeout cases.

### **5 → Zustand is just better than lifting state up and Context**

I dislike prop drilling, and React Context had bited me so many times. Zustand is **lightweight, dead simple, and supports state subscriptions**, making my Search Box and my Tags List easy to control.

### **6 → Keeping components pure & reusable**

I structured components in a way that promotes reusability, but I know there’s always room for improvement. Keeping them **pure** helps maintainability and makes testing easier.

### **7 → Using <button /> instead of some blindly <div />**

I used button for my Tags and Result Itema. I structured components in a way that that allow user to navigate using keyboard in an ordered way. In this case this would be the most simple way. It would be nasty if I used some thing like a div

## What I think I should do next (because Teo's soooooo sleepy right now, Teo needs sleep 🛌)

- Integrate unit tests
- Implement debouce for the Search Box
- Add more data for screen reader (accessibility)
- Implement a virtualized list component for the Results List, because the list can be long. Too many DOM nodes + low-end device = poor UX (and Teo's being fired)
- Refactor more (yes, I know this is not perfect yet, I just need more time)
- Implement an dedicated SVG component (again, I just need more time)
- This can be exported as an elastic search component that can be used anywhere freely

---

## 🔧 How to Run the Project (dead simple)

```sh
# Ensure you are using Node.js 22
node -v  # Should return v22.x

# Install dependencies
npm install

# Run the development server
npm run dev

# Build the project for production
npm run build
```
