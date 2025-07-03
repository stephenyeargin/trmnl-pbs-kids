# PBS Kids for TRMNL

[![Build and Deploy](https://github.com/stephenyeargin/trmnl-pbs-kids/actions/workflows/build.yml/badge.svg)](https://github.com/stephenyeargin/trmnl-pbs-kids/actions/workflows/build.yml)

![promo](assets/promo.png)

## Screenshots

![screenshot](assets/screenshot.png)

## Development

### Updating Show Options

The show options in `src/settings.yml` can be automatically updated using the included script:

```bash
./bin/update_shows
```

This script:
1. Fetches the latest show data from `https://producerplayer.services.pbskids.org/show-tracking`
2. Creates a backup of the current `settings.yml` file
3. Updates the `pbs_kids_show_id` field options with the latest shows as key-value pairs (`title: slug`)
4. Sorts shows alphabetically by title
5. Saves the updated settings

The script automatically creates a timestamped backup of the original settings file before making changes. Backups are stored in the same directory as the settings file with the format `settings.yml.backup.YYYYMMDD_HHMMSS`.

**Requirements:**
- Ruby (built-in libraries only)
- Internet connection to fetch data from PBS Kids API
