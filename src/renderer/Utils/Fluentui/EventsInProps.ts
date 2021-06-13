import {
    IChoiceGroupOptionProps,
    IChoiceGroupProps,
    IComboBoxProps,
    IContextualMenuItem,
    IContextualMenuItemProps,
    IContextualMenuProps,
    IDropdownProps,
    IListProps,
    IPersonaProps,
    IPivotProps,
    ITextFieldProps,
    IToggleProps,
} from '@fluentui/react';

export type OnChoiceGroupChange = NonNullable<IChoiceGroupProps['onChange']>;

export type OnChoiceGroupOptionRenderField = NonNullable<IChoiceGroupOptionProps['onRenderField']>;
export type OnChoiceGroupOptionRenderLabel = NonNullable<IChoiceGroupOptionProps['onRenderLabel']>;

export type OnComboBoxChange = NonNullable<IComboBoxProps['onChange']>;
export type OnComboBoxItemClick = NonNullable<IComboBoxProps['onItemClick']>;
export type OnComboBoxMenuDismiss = NonNullable<IComboBoxProps['onMenuDismiss']>;
export type OnComboBoxMenuDismissed = NonNullable<IComboBoxProps['onMenuDismissed']>;
export type OnComboBoxMenuOpen = NonNullable<IComboBoxProps['onMenuOpen']>;
export type OnComboBoxPendingValueChanged = NonNullable<IComboBoxProps['onPendingValueChanged']>;
export type OnComboBoxResolveOptions = NonNullable<IComboBoxProps['onResolveOptions']>;
export type OnComboBoxScrollToItem = NonNullable<IComboBoxProps['onScrollToItem']>;

export type OnContextualMenuDismiss = NonNullable<IContextualMenuProps['onDismiss']>;
export type OnContextualMenuMenuDismissed = NonNullable<IContextualMenuProps['onMenuDismissed']>;
export type OnContextualMenuMenuOpened = NonNullable<IContextualMenuProps['onMenuOpened']>;
export type OnContextualMenuRenderMenuList = NonNullable<IContextualMenuProps['onRenderMenuList']>;
export type OnContextualMenuRenderSubMenu = NonNullable<IContextualMenuProps['onRenderSubMenu']>;
export type OnContextualMenuRestoreFocus = NonNullable<IContextualMenuProps['onRestoreFocus']>;

export type OnContextualMenuItemClick = NonNullable<IContextualMenuItem['onClick']>;
export type OnContextualMenuItemMouseDown = NonNullable<IContextualMenuItem['onMouseDown']>;
export type OnContextualMenuItemRender = NonNullable<IContextualMenuItem['onRender']>;
export type OnContextualMenuItemRenderContent = NonNullable<IContextualMenuItem['onRenderContent']>;
export type OnContextualMenuItemRenderIcon = NonNullable<IContextualMenuItem['onRenderIcon']>;

export type OnContextualMenuItemCheckmarkClick = NonNullable<IContextualMenuItemProps['onCheckmarkClick']>;

export type OnDropdownChange = NonNullable<IDropdownProps['onChange']>;

export type OnListPageAdded = NonNullable<IListProps['onPageAdded']>;
export type OnListPageRemoved = NonNullable<IListProps['onPageRemoved']>;
export type OnListPagesUpdated = NonNullable<IListProps['onPagesUpdated']>;
export type OnListRenderCell = NonNullable<IListProps['onRenderCell']>;
export type OnListRenderPage = NonNullable<IListProps['onRenderPage']>;
export type OnListRenderRoot = NonNullable<IListProps['onRenderRoot']>;
export type OnListRenderSurface = NonNullable<IListProps['onRenderSurface']>;
export type OnListShouldVirtualize = NonNullable<IListProps['onShouldVirtualize']>;

export type OnPersonaPhotoLoadingStateChange = NonNullable<IPersonaProps['onPhotoLoadingStateChange']>;
export type OnPersonaRenderInitials = NonNullable<IPersonaProps['onRenderInitials']>;
export type OnPersonaRenderOptionalText = NonNullable<IPersonaProps['onRenderOptionalText']>;
export type OnPersonaRenderPersonaCoin = NonNullable<IPersonaProps['onRenderPersonaCoin']>;
export type OnPersonaRenderPrimaryText = NonNullable<IPersonaProps['onRenderPrimaryText']>;
export type OnPersonaRenderSecondaryText = NonNullable<IPersonaProps['onRenderSecondaryText']>;
export type OnPersonaRenderTertiaryText = NonNullable<IPersonaProps['onRenderTertiaryText']>;

export type OnPivotLinkClick = NonNullable<IPivotProps['onLinkClick']>;

export type OnTextFieldChange = NonNullable<ITextFieldProps['onChange']>;
export type OnTextFieldGetErrorMessage = NonNullable<ITextFieldProps['onGetErrorMessage']>;
export type OnTextFieldNotifyValidationResult = NonNullable<ITextFieldProps['onNotifyValidationResult']>;
export type OnTextFieldRenderDescription = NonNullable<ITextFieldProps['onRenderDescription']>;
export type OnTextFieldRenderLabel = NonNullable<ITextFieldProps['onRenderLabel']>;
export type OnTextFieldRenderPrefix = NonNullable<ITextFieldProps['onRenderPrefix']>;
export type OnTextFieldRenderSuffix = NonNullable<ITextFieldProps['onRenderSuffix']>;

export type OnToggleChange = NonNullable<IToggleProps['onChange']>;
