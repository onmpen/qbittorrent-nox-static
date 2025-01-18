### v2.1.0 - 17/01/2025

`qbt-nox-static.bash` will be a created alongside the `qbittorrent-nox-static.sh`.

`qbt-nox-static.bash` ≥ `v2.1.0`

`qbt-nox-static.bash` will start `v2.1.0` and `qbittorrent-nox-static.sh` will be frozen at `v2.0.14`going forward.

This is to avoid breaking anything. `v2.1.0` is not really changing the outcome but the behaviour of the script towards that outcome. So the least disruptive way is the opt in route.

I also wanted to changed the extension from `sh` to `bash` as it is a bash script.

Main changes:

A reworked dependency and module installation logic, which has changed the default behaviour of the script. The script was designed to be run in a docker and needs `curl` and `git` to perform basic test functions. So it would automatically try to install all deps from a single array when run as root or with sudo to able to then do the basic interactions.

This has been changed so that the script makes does not modify the host or create files if just called by it's name. It will do basic dependency checks and offer options to install what's needed.

It can now only install the required test dependencies or perform basic functions if they are already installed meaning the basic features and help functions are usable without installing the full suits of dependencies.

Updated the default build flags to be a bit more modern which breaks building on some older systems.

Removed build script support for buster and focal due to conflicts with updated builds flags and will support current releases only going forward.

general refactoring towards more consistent use of arrays data throughout the script.

credits: Borrowed some build flags from here [qbittorrent/docker-qbittorrent-nox](https://github.com/qbittorrent/docker-qbittorrent-nox/blob/main/Dockerfile#L59-L61)

### v2.0.15 - 17/01/2025

`qbittorrent-nox-static.sh` only

fixed: optimize was not working as intended for being spelt inconsistently and the checks for crossbuilding were not correct.
changed: optimize now accepts a quoted string of flags. `-o "-things -to -pass"

structure tweaks and layout.

### v2.0.14 - 31/12/2024

fix: libtorrent `v1.2` and boost `1.86.0` check to not ignore `RC_1_2`
fix: the `_apply_patches` function was assuming the remote default branch name of `master` which made it fail the check. It now tests for the remote default branch of a patch repo and uses that.
fix: boost source URL. jfrog source is just a problem. Script now defaults to github boost release and falls back to archives.boost.i, jfrog is purged.
fix: Some typos

### v2.0.13 - 31/12/2024

Added `qbt_build_dir` as a definable env variable. This variable is to set the build directory which defaults to `qbt-build` if unset

### v2.0.12 - 17/12/2024

Default to `boost-1.86.0` for `RC_1_2` or `v1.2.x` builds because `RC_1_2` has not been updated to support the (depreciated) features removed in `boost-1.87.0` so the build will fail.

This method allows the user to override the setting by providing a valid boost tag using `qbt_boost_tag` or `-bt`

fix: changed `-bt | --boost-version` to `-bt | --boost-tag` for consistency. It was always supposed to be `--boost-tag` since that is what we are providing and testing via this flag.

### v2.0.11 - 13/10/2024

Disable glib tests on zlib-ng https://github.com/userdocs/qbittorrent-nox-static/pull/173

Update contributor info

minor changes - https://github.com/userdocs/qbittorrent-nox-static/commit/e4a674fa3832e0c0d6950539adac9d1d8d00d0e7

### v2.0.10 - 05/10/2024

Make `cmake` the default build tool with the release of qBittorrent v5

### v2.0.9 - 14/05/2024

Change default c++ standard used for newer build combinations from 23 to 20.

### v2.0.8 - 12-04-2024

Fixed a regression with `-o` where part the code was left in and duplicated after introducing a check for cross compilation, causing the positional parameters to be shifted twice, breaking things.

fix - https://github.com/userdocs/qbittorrent-nox-static/commit/b51e1ef356fbdbd3f2f93f2b2a8a6279b99e5f22

### v2.0.7 - 12-02-2024

Added: a boost download function to combine some logic around fallback urls and minimise external calls.
Added: a check to build combos for qt + cmake to prevent env files trying to build a known bad combo.
fixed: modules check for whole word and not accept partial matches
fixed: associative arrays declared earlier and in a group to allow changing settings via functions

### v2.0.6 - 2024-01-27

New flag: `-si` / `--static-ish` for Debian, Ubuntu, and Alpine platforms. This flag disables LDFLAG static linking, allowing the OS libc to be dynamically linked.

You cannot you this flag with cross compilation, only native host builds.

Tests were added for ` static-ish` and `optimise` to check for bad combinations, exiting the script with a helpful reason when used in combination with cross compilation, as the build will fail.

### v2.0.5 - 23-01-2024

Codename: Copilot made me do it

Improved readability of the colour variables used throughout the script.
Some minor tweaks to OS detection
Moved some things around or into their own functions and some error handling.
Some changes to how cxx standard is handled and defined so the script will default to 23 when the conditions are met.
minor bug fix - `qbt_libtorrent_version` displays correctly when using an RC github tag.

Support for Ubuntu Noble added - Mantic removed as it's preferred to support LTS releases

Ubuntu Focal - Jammy - Noble
Debian Bullseye - Bookworm

### v2.0.4 - 16-01-2024

Make sure the workflow override applies when using cached dependencies
Allow patching from a remote raw git patch via URL - an file called `url` in the patch repo for the module version that contains a URL to the raw patch
other minor tweaks and cosmetic changes

### v2.0.3 - 27-12-2023

Fixed a regression from the V2 update where the host arch for `zlib-ng` was incorrectly set to `x86_64`, regardless of the actual host arch, when building on a non `x86_64` host to the same target arch (not cross building).

https://github.com/userdocs/qbittorrent-nox-static/issues/131

### v2.0.2 - 26-05-2023

Set `ICU` default to `no`. It does not need to be forced to on as there is no longer a related bug and it also makes more sense when considering the `-i` toggle.

### v2.0.1 - 15-05-2023

Bug fix: `skip_icu` was being unset and defaulting to no. It is no longer unset and if set to skipped when using the module directly will still skip it.

### v2.0.0 - 03-04-2023

There have been various breaking changes in the supporting architecture that effect the script and require updating to v2.0.0 from v1.1.0 or earlier.

A lot of changes and tweaks to workflows and supporting repos to make sure things are as size efficient as they can be. For example, gz to xz where possible.

Alpine Crossbuild tools are 70% reduced in size.

The script can now build for these arches using musl or debian though workflows and releases may not target them all yet.

armel armhf armv7 aarch64 x86_64 x86 s390x powerpc ppc64el mips mispel mips64 mips64el riscv64

v2 is is an overhaul that aims to be more sensibly coded and and use associative arrays to handle the URL data properly. Less obfuscated and consistent in how it uses this data.

docs to be updated soon.

A quick summary of main changes and features from v1.5.0 through vto 2.0.0

No more bison or gawk building. They are OS dependencies now and need to be installed on the host.
Alpine only - Increased multiarch target support, updated musl cross tools and optimised size.
A caching mechanism for files to store and manage download dependencies to avoid re-downloading them across builds.
Any valid boost tag can be provided including beta tags. It was not a tag based check before.
Any valid qt tag can be provided including beta tags.
patches system reworked to allow patching any module. Source code files can also be used from app_version/source
Improved the way tags are checked and the changes applied to be more consistent throughout the script.
Removed any trace of gnu.org for being a really unreliable source location.
optimised multiarch configurations and multiarch various bug fixes.
Alpine only - Ninja is now prebuilt instead of locally built.
All url data can be viewed using the -sdu switch.
Lots of small tweaks, removing code and simplifying code and rebuilding functions.

### v1.1.0 - 18-03-2023

Breaking changes: -bv 1.81.0 have been replaced with -bt boost-1.81

Reason: This check is now very similar to the -lt and -qt switches to it makes sense to bring it inline with how those are used.

Changes:

The script has gone through a general refactoring with many code optimizations, simplifications and improvements starting from v1.0.6.

Features:

Caching and cache management via -cd

Tag switches are more versatile in how they select source files based on tag input. Trying to use archives first but automatically falling back to folders when required.

More env options introduced to make setting most dynamic features available via env settings.

New switch options added.

### v1.0.6 - 07-03-2023

Lot of tweaks and changes.

cache files method is now integrated into the script as a result of the URL function changes.

Refactored URL function. It now uses associative arrays to hold the data for URLs, tags and versions. This makes the data more structured and easier to use consistently throughout the script.

Changed all instances of echo -e to printf %b

Added a method to using an existing local git repo as a cached source. It will clone a folder with the matching app name in the cache path provided and clone, if it exists.

It will respect manually specified tags and checkout those from the clone folders.

The lowercase naming convention of the applications must be used in the cache_path/folder_name like cache_path/qbittorrent

It must be a git repo

### v1.0.5 - 06-03-2023

Modified the default behaviour of the Debian installation to not build gawk and bison by default. It will now install them via apt-get.

There is a new switch -dma which will trigger the alternate mode and instead build gawk and bison from source.

### v1.0.4 - 19-01-2023

Changed: Dropped build support for older Buster-Bionic since they require a more modern gcc version to successfully build natively. Successful builds on a modern OS can be used there instead.

### v1.0.3 - 15-07-2022

Fixed: build - Libtorrent using b2 had checks against supplied tags to do version specific things that failed to match properly when using a pull request tag or non versioned branch. It now always check the version.hpp to determine the version in these build checks.
