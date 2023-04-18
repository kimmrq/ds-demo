# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## v1.17.1

### Fixed

-   NavBar - reset childindex after close
-   TextInput - hide onReset button when input has no value

## v1.17.0

### Changed

-   NavBar - close menu on outside click [CS-12642]

### Fixed

-   NavBar - fix different width non-active state [CS-12642]
-   NavBar - fix onClose MenuLink [CS-12655]
-   PasswordInput - e.getModifierState is not a function [CS-12670]

## v1.16.2

### Fixed

-   DropdownMenu - fix popper position
-   DropdownFilter - fix popper position

## v1.16.1

### Fixed

-   Tooltip - fix z-index on popper

## v1.16.0

### Breaking Changes

-   FormGroup - renamed popover props to tooltip [CS-12581]

### Changed

-   FormLabel - replace Popover with Tooltip [CS-12581]
-   DropdownFilter - add Popper for placement [CS-12629]

## 1.15.1

### Fixed

-   DropdownMenu - fixed z-index on popper element

## 1.15.0

### Added

-   KsyosLogo [CS-12572]

### Changed

-   DropdownMenu - refactor to support IconButton as trigger [CS-12602]

### Fixed

-   Switch - fix Tooltip when disabled [CS-12576]

### Internal

-   Added eslint-plugin-typescript-sort-keys

## 1.14.1

### Breaking changes

-   SideBarMenu - renamed SideBarListItems to SideBarMenuItems and added link property [CS-8732]

### Changed

-   SideBarMenu - improved internal state and onClick handling [CS-8732]
-   NavBar - implementation fixes ClientSafe [CS-12502]

## 1.14.0

### Added

-   Tooltip [CS-9100]

### Changed

-   UserSelect - add close on outside click [CS-12455]
-   UserSelect - make keyboard accessible [CS-12455]
-   NavDropdown - flexible width [CS-12190]
-   NavDropdown - add avatar initials prop [CS-12454]

### Fixed

-   FormGroup - label not full width [CS-12501]
-   ActionBar - use portal and remove full page width container [CS-12404]
-   IconButton - fix textinput states [CS-12509]
-   Popover - fix z-index [CS-12527]

## 1.13.3

### Fixed

-   Button - fixed invalid DOM prop warning

## 1.13.2

### Fixed

-   Reverted back to insetPadding prop name
-   Fixed isDisabled prop on button

## 1.13.1

### Fixed

-   Reverted back to previous Link behavior

## 1.13.0

### Breaking changes

-   Popover - renamed placement options [CS-10983]
-   Collection - renamed insetPadding to $insetPadding [CS-12365]
-   FormGroup - renamed insetPadding to $insetPadding [CS-12365]

### Changed

-   Popover - refactor with use of react-popper [CS-10983]
-   NavBar - improved priority+ navigation pattern [CS-11655]
-   Link - Explicitly set elementType [CS-12355]
-   Button - add elementType prop [CS-12354]
-   FormHeader - add headerLevel prop H1 to H4 [CS-12053]

### Fixed

-   Spacer - only add spacing to valid react elements [CS-12352]
-   TextInput - remove tabindex in readonly mode [CS-12386]
-   ButtonGroup - remove outside padding on variant 'ghost' [CS-12353]
-   Collection - fixed insidePadding warning [CS-12365]

## 1.12.2

### Fixed

-   Stop event propagation NavDropdown
-   Circular dependency DropdownFilter

## 1.12.1

### Fixed

-   Added missing export for DropdownFilter

## 1.12.0

### Added

-   Drawer [CS-11657]
-   DropdownFilter [CS-11661]

### Changed

-   Table - added transparentHeader and spacing options[CS-11656]
-   Passwordinput - added spacing for password managers[CS-11864]
-   CardCollapse - added Link color options [CS-11267]
-   AuthCode - clear inputs [CS-11863]
-   TextInput - added onReset [CS-11815]

### Fixed

-   Added type definitions for styled-system [CS-11956]
-   Switch - IE11 bug [CS-11614]

### Internal

-   Package upgrade [CS-10964]
-   Collection - added story with Link example [CS-9099]

## 1.11.1

### Added

-   ScoreBar [CS-11050]
-   Collapse [CS-11299]
-   Box [CS-11134]

### Changed

-   Spacing FormGroup [CS-8437]
-   Maxlength prop to Textarea [CS-10990]

### Fixed

-   AvatarBlock text does not wrap IE11 [CS-11393]
-   Capslock eventlistener [CS-11223]

### Breaking changes

-   FormGroup - renamed props `type` for `insetPadding` and `layout` [CS-8437]

### Internal

-   Added Styled System [CS-11134]
-   Updated to Storybook 6.2.9

## 1.10.1 [08 March 2021]

### Fixed

-   Text color type revert to string [CS-11029]

## 1.10.0 [02 March 2021]

### Breaking Changes

-   Badge - renamed props BadgeColor to color and BadgeSize to size [CS-10480]
-   TextAreaResize has been removed, use TextArea with `autoResize` prop instead [CS-9752]

### Added

-   Responsive NavBar [CS-8722]

### Changed

-   Text refactor [CS-8963]
-   AvatarBlock - Added Badge [CS-10480]
-   Avatar - Added color and backgrounColor props [CS-10666]
-   TextArea - Added autoResize prop [CS-9752]
-   Checkbox - Added labelSize prop [CS-9774]
-   Improved type checking on compound components [CS-10235]

### Fixed

-   Add default type to AvatarButton [CS-10694]
-   Center actionbar [CS-10479]

### Internal

-   Setup Visual Regression Testing [CS-10765]
-   Package upgrade [CS-9825]

## 1.9.0 [19 January 2020]

### Breaking Changes

-   Button - renamed variant="text" to variant="ghost" [CS-9772]

### Added

-   Print icon [CS-10259]

### Changed

-   Button & Link refactor [CS-9772]
-   AuthCode - error and success state [CS-10305]
-   Card - added borderColor prop

### Fixed

-   TabBar overflow bug IE11 [CS-10452]
-   AvatarButton text alignment IE11 [CS-9064]

## 1.8.0 [14 December 2020]

### Added

-   UserSelect [CS-9832]
-   Steps [CS-9093]
-   ButtonGroup [CS-9096]
-   RadioButton [CS-9092]
-   ValidateFeedback PasswordInput [CS-9956]

### Changed

-   IconCircle - added background and hasBorder prop [CS-9832]

### Fixed

-   Switch - label is now optional [CS-10204]
-   Circular dependency TabBar [CS-10237]

### Internal

-   Added font-smoothing to StorybookStyles [CS-9832]

## 1.7.1 [23 November 2020]

### Added

-   Form [CS-8031]

### Changed

-   Link - added color and typography variants [CS-9828]
-   Card & Spacer - added consistent spacing variants [CS-9828]

### Docs

-   Page composition for the login page KGB [CS-9828]

## 1.7.0 [20 November 2020]

### Breaking Changes

-   MediaObject - renamed props `title` and `subtitle` [CS-9830]

### Added

-   InputCheckmark [CS-9097]
-   AuthCode [CS-9831]
-   TabBar [CS-9735]
-   Divider [CS-9096]
-   PasswordInput [CS-9833]

### Changed

-   Avatar - added initials [CS-9353]
-   Switch - added input labels [CS-9830]
-   MediaObject - added prop for call to action button [CS-9830]
-   InputCheckmark - added variants [CS-9829]

### Fixed

-   CardCollapse - animation fix [CS-9787]
-   Button - z-index fix [CS-9941]

### Docs

-   MediaObject - added multiple page compositions for the account activation flow KGB [CS-9830]

### Internal

-   Package upgrade [CS-8288]

## 1.6.0 [02 November 2020]

### Breaking Changes

-   Button renamed `variation` prop to `variant` [CS-9730]
-   AvatarGroup renamed to AvatarBlock [CS-9098]

### Added

-   Switch [CS-9574]
-   AvatarGroup [CS-9098]

### Changed

-   Button size small [CS-9730]

### Fixed

-   Focus style fix Chrome [CS-9371]
-   TableHeaderButton background-color fix [CS-9694]

### Internal

-   Added Storybook Controls [CS-9088]
-   Restore type checking on Stories [CS-9647]

## 1.5.4 [29 September 2020]

### Added

-   Added IconLink [CS-9356]
-   Added Collapse Card [CS-9095]
-   Added Popover option to formgroup [CS-9270]

### Internal

-   Removed bootstrap from dependency [CS-9203]

### Fixed

-   Fix IE compatibility, for Dev & ACC [CS-9426]
-   Fixed Popover placement [CS-9173]
-   Fixed ActionBar initial opacity [CS-9174]
-   Updated AvatarGroup with onclick [CS-9199]
-   Fixed spacing properties Spacer [CS-9297]

## 1.5.3 [03 September 2020]

### Added

-   Page template with sticky footer [CS-9094]
-   Spacer component [CS-9163]

### Internal

-   Updated to Storybook 6.0.21 [CS-8669]

## 1.5.2 [24 August 2020]

### Fixed

-   Feedback [CS-8669]

## 1.5.1 [04 August 2020]

### Changed

-   Added Icon types to exported components

## 1.5.0 [03 August 2020]

### Added

-   Table v2 [CS-8610]

### Breaking Changes

-   Renamed CarePathIcons [CS-8955]

### Fixed

-   Radio & Checkbox size [CS-8610]

### Internal

-   Simplified hierarchy separators Storybook [CS-8955]

## 1.4.0 [25 July 2020]

### Added

-   Popover [CS-8620]

### Fixed

-   Unique ID changes on re-render [CS-8957]
-   TableHeader height [CS-8924]

### Docs

-   Fixed TableRow key [CS-8923]

## 1.3.0 [21 July 2020]

### Breaking Changes

-   Typography 2.0 [CS-8375] (Replace InheritColor with color="inherit")

### Added

-   ActionBar [CS-8072]
-   Custom theme for MijnKsyos [CS-8814]
-   TextAreaResize [CS-8474]

### Changed

-   List [CS-8836] (Added styleType="counter")
-   Button [CS-8834] (Added width options)
-   ButtonRow [CS-8834] (Added isStackedBelowSmall boolean prop)

### Internal

-   Improved theme structure and types [CS-8742]

## 1.2.1 [14 July 2020]

### Fixed

-   Icon types

## 1.2.0 [13 July 2020]

### Added

-   Table [CS-8074]
-   SideBarMenu [CS-8043]
-   NumberedBadge [CS-8073]

### Changed

-   IconButton inverse variant [CS-8808]
-   Medium font weight [CS-8696]

### Internal

-   Package upgrade DS [CS-8826] (Node v14.5.0, Fixed Prop table in DocsPage)

## 1.1.1 [30 June 2020]

### Fixed

-   NavDropdown implementation fix [CS-8747]

## 1.1.0 [29 June 2020]

### Added

-   CountdownButton [CS-6944]

### Changed

-   Extend all component interfaces with HTMLAttributes [CS-8671]
-   Form elements focus state refactor [CS-8317]
-   NavDropdown refactor [CS-8479]

### Fixed

-   Support multiple aspect ratios Avatar [CS-8600]
-   Convert CollectionLink to anchor element [CS-8715]

## 1.0.10 [15 June 2020]

### Added

-   Menu and MenuItem [CS-8076]
-   DropdownMenu [CS-8076]
-   NavBar [CS-8097]

### Changed

-   Alert [CS-8252] (Added Link styles and optional icon prop)
-   NavDropdown [CS-8454] (Simpler API)
-   RadioGroup [CS-7955] (Added roving tab-index, RadioGroup now controls radio state)
-   Link [CS-8252] (Inherit font-size from parent container)

### Fixed

-   FormGroup [CS-8433] (Bootstrap 12 vs 24 column grid bugfix)

## 1.0.9 [29 May 2020]

### Breaking Changes / Fixed

-   CarepathIcon names have changed and variant prop is added [CS-8121]
-   FormGroup ForwardRef bugfix [CS-8153] (Renamed hasErrors prop to haserrors)
-   List alignment bugfix [CS-8371] (Removed listStyle and as prop, added new prop styleType)
-   Refactor inputs [CS-8154] (TextInput & TextArea onHandleChange renamed to onChange, onDovalidate renamed to onBlur and several props removed)

### Added

-   New carepath icons for GenericHomeConsultation, CoronaServices and DigitalConsultationHours [CS-8121]
-   Collection Component [CS-8078]

## 1.0.8 [19 May 2020]

### Added

-   Alert [CS-7979]
-   AvatarGroup [CS-7733]
-   FormLayout [CS-8038]
-   InputLayout [CS-8038]
-   MediaObject [CS-8044]
-   ProfileBar [CS-7733]
-   SideBar [CS-7733]

### Changed

-   IconButton - Added labelText & type prop [CS-8156]

### Fixed

-   Added Card to list of exported components [CS-8156]

### Internal

-   Added tokens for new lightBlue color palette [CS-7979]

## 1.0.7 [30 April 2020]

### Added

-   Selectable Button [CS-7707]
-   NavDropdown [CS-7703]
-   Form [CS-7732]
-   Card [CS-7705]
-   Avatar [CS-7129]
-   AvatarButton [CS-7129]
-   Checkbox [CS-7629]
-   ListRow [CS-7706]
-   IconCircle [CS-7703]

### Changed

-   Badge refactor
-   Icon refactor
-   Button styles

### Internal

-   ESLint plugins for sorting imports and kebab case filenames [CS-7789]
-   Package upgrades
