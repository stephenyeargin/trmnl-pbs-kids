# PBS Kids Show Options Updater

This script automatically updates the show options in `src/settings.yml` by fetching the latest show data from the PBS Kids API.

## Usage

From the project root directory:

```bash
./bin/update_shows
```

## What it does

1. Fetches the latest show data from `https://producerplayer.services.pbskids.org/show-tracking`
2. Creates a backup of the current `settings.yml` file
3. Updates the `pbs_kids_show_id` field options with the latest shows
4. Sorts shows alphabetically by title
5. Saves the updated settings

## Backup

The script automatically creates a timestamped backup of the original settings file before making changes. Backups are stored in the same directory as the settings file with the format:

```
settings.yml.backup.YYYYMMDD_HHMMSS
```

## Dependencies

- Ruby (built-in libraries only)
- Internet connection to fetch data from PBS Kids API

## Error Handling

The script includes error handling for:
- Network failures when fetching API data
- JSON parsing errors
- File I/O errors
- Missing settings file or fields

If any error occurs, the script will exit with an error message and will not modify the settings file.
