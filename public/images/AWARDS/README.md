# Awards Photos Directory

This directory contains all award and recognition photos for Enerquest Solutions.

## How to Add Awards

### 1. Add Your Award Images
- Place your award photos in this folder (`public/images/AWARDS/`)
- Use descriptive filenames (e.g., `excellence-award-2024.jpg`, `safety-award-2023.png`)
- Supported formats: JPG, PNG, WebP
- Recommended size: 1200x800px or similar ratio

### 2. Update Awards Data
Edit the file: `src/data/awardsData.ts`

Add your award information like this:
```typescript
{
  id: 'unique-award-id',
  title: 'Award Title',
  description: 'Brief description of the award',
  imagePath: 'your-award-image.jpg', // Just the filename
  year: '2024', // Optional
  category: 'Award Category', // Optional
  icon: 'fas fa-trophy' // FontAwesome icon class
}
```

### 3. Example Award Entry
```typescript
{
  id: 'best-contractor-2024',
  title: 'Best Electrical Contractor 2024',
  description: 'Awarded for excellence in electrical contracting services',
  imagePath: 'best-contractor-2024.jpg',
  year: '2024',
  category: 'Industry Excellence',
  icon: 'fas fa-trophy'
}
```

### Available Icons
- `fas fa-trophy` - Trophy
- `fas fa-medal` - Medal  
- `fas fa-star` - Star
- `fas fa-award` - Award ribbon
- `fas fa-crown` - Crown
- `fas fa-gem` - Diamond/Gem

### File Structure
```
public/images/AWARDS/
├── README.md (this file)
├── excellence-award-2024.jpg
├── safety-award-2023.png
└── quality-achievement-2022.jpg
```

### Notes
- Keep image file sizes reasonable (< 2MB each)
- Use consistent naming convention
- Awards will automatically appear on the Certifications page
- Click on awards to view full-size images in modal popup