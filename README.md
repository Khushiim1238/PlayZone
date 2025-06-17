# 🎮 PlayZone

<div align="center">

![PlayZone Logo](https://img.shields.io/badge/PlayZone-Game%20Discovery-blue?style=for-the-badge&logo=gamepad&logoColor=white)

**Discover Your Next Gaming Adventure**

A modern, responsive video game discovery platform that helps you explore new and exciting games across all platforms and genres.

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

[🚀 Live Demo](#-https://play-zone-murex.vercel.app/) | [📋 Features](#-features) | [🛠️ Installation](#️-getting-started) | [🎯 Usage](#-usage)

</div>

---

## 🌟 Overview

PlayZone is a sleek and intuitive video game discovery web application that empowers gamers to find their next favorite game. Built with modern web technologies, it provides a seamless experience for browsing, searching, and filtering games from a vast database.

### ✨ Key Highlights

- 🎯 **Smart Discovery**: Find games tailored to your preferences
- 🔍 **Advanced Search**: Search by title, genre, platform, and more
- 📱 **Responsive Design**: Perfect experience on any device
- ⚡ **Fast Performance**: Built with Vite for lightning-fast loading
- 🎨 **Modern UI**: Clean, intuitive, and engaging interface

## 🚀 Features

### 🎮 Game Discovery
- **Comprehensive Game Database**: Access thousands of games through RAWG API integration
- **Platform Filtering**: Browse games by PC, PlayStation, Xbox, Nintendo Switch, and more
- **Genre Exploration**: Discover games across all genres from Action to Strategy
- **Real-time Search**: Instant search results as you type

### 🔧 Advanced Functionality
- **Detailed Game Information**: View ratings, release dates, platforms, and descriptions
- **High-Quality Images**: Stunning game screenshots and artwork
- **Sorting Options**: Sort by popularity, rating, release date, and name
- **Responsive Grid Layout**: Optimized viewing on all screen sizes

### 🎨 User Experience
- **Intuitive Navigation**: Easy-to-use interface design
- **Loading States**: Smooth loading animations and skeleton screens
- **Error Handling**: Graceful error handling with user-friendly messages
- **Accessibility**: Built with accessibility best practices

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend Framework | 18+ |
| **TypeScript** | Type Safety | 5+ |
| **Vite** | Build Tool | 4+ |
| **React Query** | Data Fetching | Latest |
| **React Router** | Navigation | 6+ |
| **Axios** | HTTP Client | Latest |
| **CSS Modules** | Styling | - |

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### 📥 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Khushiim1238/PlayZone.git
   cd PlayZone
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_RAWG_API_KEY=your_rawg_api_key_here
   VITE_API_BASE_URL=https://api.rawg.io/api
   ```

4. **Get your RAWG API Key**
   - Visit [RAWG API Documentation](https://rawg.io/apidocs)
   - Create a free account
   - Generate your API key
   - Add the API key to **src/services/api-client.ts**

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:5173](http://localhost:5173)

## 🎯 Usage

### Basic Navigation
1. **Browse Games**: Scroll through the homepage to see popular games
2. **Search**: Use the search bar to find specific games
3. **Filter by Platform**: Click on platform icons to filter games
4. **Filter by Genre**: Select genres from the sidebar
5. **View Details**: Click on any game card to see more information

### Advanced Features
- **Sort Games**: Use the sort dropdown to organize results
- **Load More**: Infinite scrolling loads more games automatically
- **Responsive Design**: Enjoy the same experience on desktop, tablet, or mobile


## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler

# Testing (if configured)
npm run test         # Run tests
npm run test:watch   # Run tests in watch mode
```

## 🌐 API Integration

PlayZone integrates with the [RAWG Video Games Database API](https://rawg.io/apidocs) to provide:

- **Game Data**: Comprehensive game information
- **Platform Data**: All gaming platforms
- **Genre Data**: Game categories and genres
- **Search Functionality**: Real-time game search
- **Images**: High-quality game artwork and screenshots

### API Endpoints Used
- `/games` - Fetch games with filtering and pagination
- `/genres` - Get all available genres
- `/platforms` - Get all gaming platforms
- `/games/{id}` - Get detailed game information

## 🎨 Customization

### Theming
The application uses CSS custom properties for easy theming:

```css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #10b981;
  --background-color: #1f2937;
  --text-color: #f9fafb;
  --card-background: #374151;
}
```

### Adding New Features
1. Create new components in the `components/` directory
2. Add custom hooks in the `hooks/` directory
3. Define types in the `types/` directory
4. Add API services in the `services/` directory

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add your environment variables in Vercel dashboard
3. Deploy automatically on every push

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Add environment variables in Netlify dashboard


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Khushi**
- GitHub: [@Khushiim1238](https://github.com/Khushiim1238)
- Email: [khushi.oc.1238@gmail.com]

## 🙏 Acknowledgments

- **[Mosh Hamedani](https://codewithmosh.com)** - For the excellent React course that inspired this project
- **[RAWG](https://rawg.io)** - For providing the comprehensive games database API
- **React Community** - For the amazing ecosystem and resources
- **Contributors** - Thank you to everyone who has contributed to this project!

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Khushiim1238/PlayZone?style=social)
![GitHub forks](https://img.shields.io/github/forks/Khushiim1238/PlayZone?style=social)
![GitHub issues](https://img.shields.io/github/issues/Khushiim1238/PlayZone)
![GitHub pull requests](https://img.shields.io/github/issues-pr/Khushiim1238/PlayZone)

---

<div align="center">

**Made with ❤️ and ☕ by [Khushi](https://github.com/Khushiim1238)**

⭐ **Star this repository if you found it helpful!** ⭐

</div>
