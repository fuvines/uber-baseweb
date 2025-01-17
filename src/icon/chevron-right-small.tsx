/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';
import { useStyletron } from '../styles';
import { mergeOverride, toObjectOverride } from '../helpers/overrides';

import Icon from './icon';
import type { IconProps } from './types';

function ChevronRightSmall(props: IconProps, ref) {
  const [, theme] = useStyletron();
  const { title = 'Right Small', size, color, overrides = {}, ...restProps } = props;
  const SvgOverride = mergeOverride(
    // Icons from the theme target the SVG override in the underlying Icon component
    {
      component:
        theme.icons && theme.icons.ChevronRightSmall ? theme.icons.ChevronRightSmall : null,
    },
    overrides && overrides.Svg ? toObjectOverride(overrides.Svg) : {}
  );
  return (
    <Icon
      viewBox="0 0 24 24"
      ref={ref}
      title={title}
      size={size}
      color={color}
      overrides={{ Svg: SvgOverride }}
      {...restProps}
    >
      <rect width="24" height="24" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0607 13.0606C15.6465 12.4749 15.6465 11.5251 15.0607 10.9393L11.0607 6.93933C10.4749 6.35355 9.52516 6.35355 8.93937 6.93934C8.35358 7.52512 8.35358 8.47487 8.93937 9.06065L11.8787 12L8.93937 14.9393C8.35358 15.5251 8.35358 16.4749 8.93937 17.0607C9.52516 17.6464 10.4749 17.6464 11.0607 17.0607L15.0607 13.0606Z"
        fill="black"
      />
    </Icon>
  );
}

export default React.forwardRef<SVGSVGElement, IconProps>(ChevronRightSmall);
